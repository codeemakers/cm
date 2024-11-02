import React, { useEffect } from 'react'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'

const TCPolicy = () => {

	const appName = process.env.REACT_APP_NAME;
	const address = process.env.REACT_APP_ADDRESS;
	// const email = process.env.REACT_APP_EMAIL;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (

		<Helmet title="Terms & Conditions">

			<CommonSection title={"Terms & Conditions"} />

			<section className='policy-section'>

				<h4 className="section__title hed">
					Terms & Conditions
				</h4>

				<h5 className="section__title mt-2 policy__sub__title">Customer Service Aggreement</h5>


				<h6>
					This Service Agreement effective as from purchased date of project, is made and entered into by and between Customer and {appName}, with a registered address located at {address}. (hereinafter the “Contractor”).
				</h6>

				<ol className='sub-heading'>

					<li><h5 className="section__title mt-4 mb-2">DEFINTIONS</h5></li>

					<h6>For purposes of this Agreement, the following terms shall have the following meanings:</h6>

					<ol>
						<li>
							<h6>“Services” means any and all services specified in the scope of Work (as defined below).</h6>
						</li>
						<li>
							<h6>“Deliverables” means any tangible property, including software media, delivered to Customer under this Service Contract, as specified in the scope of Work.</h6>
						</li>
						<li>
							<h6>“Project” means the combination of Services and Deliverables to be provided under this Agreement.</h6>
						</li>
					</ol>

					<li><h5 className="section__title mt-4 mb-2">Scope of Work</h5></li>

					<ol>
						<li><h6>Project demo video will be the scope of work deliverable</h6></li>
						<li><h6>Any other scope differ from video will considered as out of scope of implementation.</h6></li>
						<li><h6>Customer will recive installation and configuration support with demo explanation</h6></li>
					</ol>

					<li><h5 className="section__title mt-4 mb-2">Deliverables</h5></li>

					<ol>
						<li><h6>Source code</h6></li>
						<li><h6>Full Document* (Our standrad format)</h6></li>
						<li><h6>Database</h6></li>
						<li><h6>Required Software</h6></li>
					</ol>
					<h6>In case of android projects you will get Android APK and local APK along with above listed deliverables.</h6>

					<li><h5 className="section__title mt-4 mb-2">Modification of the Service</h5></li>

					<ol>
						<li><h6>For source code, add, modify or delete features will consider as paid extended support.</h6></li>
						<li><h6>Contractor reserve the right to commit or choose the feasibily of new change as requested from Customer side.</h6></li>
						<li><h6>Depends on our time frame, Contractor commit the modification timeline.</h6></li>
					</ol>

					<li><h5 className="section__title mt-4 mb-2">Refund Policy</h5></li>

					<ol>
						<li><h6>Contractor if fail to deliver the Deliverables (C) mentioned above within 3 days (Or)</h6></li>
						<li><h6>If complete software deployment is failed in Customer Laptop, i.e configuration of software.</h6></li>
					</ol>
					<h6>Customer can request for refund at codemakersolutions@gmail.com, time line as processed from payment gateway. For direct bank take 7 days.</h6>

					<li><h5 className="section__title mt-4 mb-2">Live Support</h5></li>

					<ol>
						<li><h6>Till project completation (3 Months Maxmium) Customer will receive technical support</h6></li>
						<li><h6> Customer will get support in call, chat, mail support in working hours 9:30 AM to 6:30 PM IST</h6></li>
					</ol>

					<li><h5 className="section__title mt-4 mb-2">WARRANTIES AND REMEDIE</h5></li>

					<ol>
						<li><h6>Contractor warrants deliverable functionality substantially as defined in the Scope of Work.</h6></li>
						<li><h6>Contractor does not warrant any third-party software development tools</h6></li>
						<li><h6>Customer will get Maxmium 1 configuration support for below points</h6></li>
						<h6>i. Repair of damage to Deliverables caused by Customer.
						</h6>
						<h6>ii. Repair of damage caused by Customer’s improper installation, relocation, or rearrangement of Deliverables.</h6>
						<li><h6>Extra Configuration will be paid support for Android Rs 500/- and PHP Rs 300/-</h6></li>
					</ol>

					<li><h5 className="section__title mt-4 mb-2">Access Limitation for Mobile App</h5></li>

					<ol>
						<li><h6>Publishing to Google play store, Customer cannot upload to play store, since its debugging apk. We won't have services for play store publication</h6></li>
					</ol>

					<li><h5 className="section__title mt-4 mb-2">Restrictions</h5></li>

					<h6>Deliverables (C) used for acedamic purpose only</h6>
					<h6>Unless prior written consent has been obtained from the Contractor, the following shall not be allowed.</h6>

					<ul>
						<li className='mt-2'>
							<i className="ri-arrow-right-s-line"></i>
							<span className='pl-3'>Commerical Usage</span>
						</li>
						<li className='mt-2'>
							<i className="ri-arrow-right-s-line"></i>
							<span className='pl-3'>The distribution of any source codes for third parities</span>
						</li>
						<li className='mt-2'>
							<i className="ri-arrow-right-s-line"></i>
							<span className='pl-3'>The software should not be merged, compiled, or copied unless expressed without communication</span>
						</li>
						<li className='mt-2'>
							<i className="ri-arrow-right-s-line"></i>
							<span className='pl-3'>Disclosure of any source codes pertaining to the software to any additional parties not included in this agreement.</span>
						</li>
					</ul>

					<li><h5 className="section__title mt-4 mb-2">Liability</h5></li>

					<ul>
						<li className='mt-2'>
							<i className="ri-arrow-right-s-line"></i>
							<span className='pl-3'>Under no circumstances will either party or their representatives be liable to each other for any incidental, consequential, or indirect damages including but not limited to lost or damaged data, revenue loss, economic loss, or commercial loss arising out of a breach of any terms and conditions set forth in this Customer Service agreement.</span>
						</li>
						<li className='mt-2'>
							<i className="ri-arrow-right-s-line"></i>
							<span className='pl-3'>Customer not supposed post any comments about contractor which lead to termination of service.</span>
						</li>
					</ul>

					<li><h5 className="section__title mt-4 mb-2">Termination</h5></li>

					<ul>
						<li className='mt-2'>
							<i className="ri-arrow-right-s-line"></i>
							<span className='pl-3'>No suport and Scope of Work (B) will be provide after 3 months.</span>
						</li>
					</ul>

				</ol>

			</section>

		</Helmet>

	)

}

export default TCPolicy