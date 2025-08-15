import { Product } from "@/sanity.types";
import ProductThumbnail from "./ProductThumbnail";
import { AnimatePresence, motion } from "framer-motion";

const ProductGrid = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {products.map((product) => {
                return (
                    <AnimatePresence key={product._id}>
                        <ProductThumbnail key={product._id} product={product} />
                    </AnimatePresence>
                );
            })}
        </div>
    );
};

export default ProductGrid;