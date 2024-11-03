import React from 'react'
import { Col } from 'reactstrap'
import AnimatedGif from './animatedGif'
import { cmloader } from '../../assets/images/ImagePaths'

const LoadingComponent = () => {
	return (

		// <center>
		// 	<Col lg='12' className="text-center">
		// 		<h5 className="fw-bold">Loading...</h5>
		// 	</Col>
		// </center>

		<center>
			<Col lg='2' className="text-center">
				<AnimatedGif
					src={cmloader}
					alt={"Loading"}
					h={40}
					w={10}
				/>
			</Col>
		</center>

	)
}

export default LoadingComponent