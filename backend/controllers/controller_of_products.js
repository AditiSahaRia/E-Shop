const Product = require("../models/productmodel");
const ErrorHandler = require("../utils/error_handler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/features");

//Create Product -- Admin

exports.createProduct = catchAsyncErrors(
    async(req, res, next)=>{
        const product = await Product.create(req.body);
    
        res.status(201).json({
            success: true,
            product
        })
    }
)


// Get All Products

exports.getAllProducts = catchAsyncErrors(
    async(req, res) => {

        products_per_page = 10;
        const features = new Features(Product.find(), req.query)
            .search()
            .filter()
            .pagination(products_per_page);

        const products = await features.query;
    
        res.status(200).json({
            success: true,
            products
        })
        // res.status(200).json({message: "Route is working fine"})
    }
)

// Get Details of Products

exports.getProductDetails = catchAsyncErrors(
    async(req, res, next)=>{

        const product = await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found", 404));
        }
    
        res.status(200).json({
            success: true,
            product
        })
    }
)


// Update Product -- Admin

exports.UpdateProduct = catchAsyncErrors(
    async (req, res, next)=>{
        let product = await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found", 404));
        }
    
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
    
        res.status(200).json({
            success: true,
            product
        })
    }
)


// Delete Product

exports.deleteProduct = catchAsyncErrors(
    async(req, res, next)=> {

        const product = await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found", 404));
        }
    
        await product.remove();
    
        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        })
    }
)