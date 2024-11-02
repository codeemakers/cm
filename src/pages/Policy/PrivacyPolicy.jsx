import { useEffect } from 'react';
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'

const PrivacyPolicy = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <Helmet title="Privacy Policy">

		<CommonSection title={"Privacy Policy"} />

		<section className='policy-section'>

			<h4 className="section__title hed mb-3">Privacy Policy</h4>

			<h6>
				Welcome to Code Makers. We value the privacy of our visitors and are committed to protecting your personal information. Please read this Privacy Policy carefully to understand how we manage the information you share with us.
			</h6>

			<ol className='sub-heading'>

				<li><h5 className="section__title mt-4 mb-2">Information Collection</h5></li>
				<h6>
					Our website does not require account creation or personal information submission. We display the details of available software projects for your reference only.
				</h6>

				<li><h5 className="section__title mt-4 mb-2">Contact and Purchase Process</h5></li>
				<h6>If you are interested in purchasing a project, you can contact us directly via WhatsApp. By contacting us on WhatsApp, we may receive your phone number, but only because you initiated the communication. We do not collect your information directly through the website.</h6>

				<li><h5 className="section__title mt-4 mb-2">Use of Information</h5></li>
				<h6>We use the contact information solely for the purpose of assisting you with your inquiries and project purchases. Your information will not be shared, sold, or misused.</h6>

				<li><h5 className="section__title mt-4 mb-2">Data Security</h5></li>
				<h6>We take the protection of your contact information seriously and ensure it remains confidential. We will not disclose your information to third parties.</h6>

				<li><h5 className="section__title mt-4 mb-2">Changes to This Policy</h5></li>
				<h6>We may update this Privacy Policy as necessary. Please check this page periodically for any changes.</h6>

			</ol>

		</section>

	</Helmet>

}

export default PrivacyPolicy;