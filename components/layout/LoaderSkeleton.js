import Skeleton from 'react-loading-skeleton';
import Card from '../ui/Card';



function LoaderSkeleton() {
    return (
        <Card> <div>
            <Skeleton width={580} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
        </div> </Card>
    )
}

export default LoaderSkeleton
