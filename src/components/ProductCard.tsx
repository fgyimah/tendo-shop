import React from 'react';
import styled from 'styled-components';
import { Product } from '../@types';

interface Props {
	product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
	return (
		<StyledCard>
			<div className="image">
				<img src={product.imageUrl} alt={product.title} />
			</div>
			<div className="info">
				<h4>{product.title}</h4>
				<p>{product.description}</p>
			</div>
			<div className="cta">
				<div className="buy-btn">BUY NOW</div>
				<div className="add-to-cart-btn">ADD TO CART</div>
			</div>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	box-shadow: 0 16px 16px -2px rgba(0, 0, 0, 0.4);
	margin: 1.5rem;
	height: max-content;
	cursor: pointer;

	.image {
		img {
			width: 100%;
			height: 22rem;
		}
	}
	.info {
		text-align: center;
	}
	.cta {
		display: flex;
		align-items: center;
		margin-top: 1rem;

		& > div {
			width: 100%;
		}
	}
	.buy-btn {
		background-color: #1212d8;
		color: #fff;
		padding: 1rem 2rem;
		cursor: pointer;
	}
	.add-to-cart-btn {
		background-color: #1ed32d;
		color: #fff;
		padding: 1rem 2rem;
		cursor: pointer;
	}
`;

export default ProductCard;