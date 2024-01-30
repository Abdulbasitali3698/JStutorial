export default function ReviewDetail({params,}:{
    params:{
        productId:string,
        reviewId:string
    }
}){
    return(
        <div>
            <h1>
                review{params.reviewId} for product{params.productId}
            </h1>
        </div>
    )
}