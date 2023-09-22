import { deleteReview } from '@/apis/review';
import Icon from '@/components/common/Icon';
import { Rating } from '@/components/common/Rating/Rating';
import { DetailReview } from '@/components/Detail/detailReview/Review';
import * as S from '../Detail.styles';

type ReviewProps = {
  key: number;
  review: DetailReview;
  handleDeleteReview: (deleteReview: number) => void;
};

const ReviewBox = ({ review, handleDeleteReview }: ReviewProps) => {
  const options = JSON.parse(review.options);

  /** deleteReviews() : 해당 리뷰 삭제 */
  const deleteReviews = () => {
    deleteReview(review.reviewId).then((result) => {
      if (result.status === 200) {
        //TODO: alert -> 모달로 변경
        alert('해당 리뷰가 삭제되었습니다.');
        handleDeleteReview(review.reviewId);
      }
    });
  };

  return (
    <S.DetailReviewBox>
      <div className="review_box_container">
        <div className="review_box_top">
          <div className="name_wrapper">
            <span>{review.author}</span>
            <Icon name="IconX" cursor="pointer" onClick={deleteReviews} />
          </div>
          <div className="rating_wrapper">
            <Rating size={20} count={review.starPoint} readOnly />
          </div>
        </div>
        <div className="review_box_middle">
          <img className="img" src={review.imageUrl} alt="리뷰 이미지" />
        </div>
        <div className="review_box_bottom">
          <div className="option_wrapper">
            <span>선택 옵션</span>
            <span>{options}</span>
          </div>
          <div className="review_content">
            <span>{review.content}</span>
          </div>
        </div>
      </div>
    </S.DetailReviewBox>
  );
};

export default ReviewBox;
