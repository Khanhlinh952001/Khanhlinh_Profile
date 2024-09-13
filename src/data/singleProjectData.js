// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'Jul 26, 2023',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Vo Khanh Linh',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://khanhlinh-profile.vercel.app/',
			},
			{
				id: 4,
				title: 'Phone',
				details: '010-2500-0935',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'As a dedicated and innovative Developer, my objective is to leverage my technical skills and experience to design and implement software solutions that enhance user experiences and drive business success. I strive to develop high-quality, maintainable, and scalable code while continuously improving my knowledge of emerging technologies and industry best practices.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
				    'CSS',
					'JavaScript',
					'NextJs',
					'TailwindCSS',
					'Firebase',
					'Mongoose',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Tackling Complex Problems: Embrace and solve challenging technical issues with creative and effective solutions',
			},
			{
				id: 2,
				details:
					'Innovative Development: Develop forward-thinking applications that set new standards in functionality, efficiency, and user experience.',
			},
			{
				id: 3,
				details:
					'Continuous Growth: Pursue ongoing learning opportunities and stay at the forefront of technological advancements to enhance my expertise',
			},
			{
				id: 4,
				details:
					'High-Quality Code: Write robust, maintainable, and scalable code that meets rigorous industry standards and best practices.',
			},
			{
				id: 5,
				details:
					'User-Centric Design: Design and implement software that not only meets but exceeds user expectations in terms of usability and performance',
			},
			{
				id: 6,
				details:
					'Collaborative Excellence: Work collaboratively within diverse, cross-functional teams to drive project success and innovation.',
			},
			{
				id: 7,
				details:
					'Agile and Adaptive: Thrive in fast-paced, agile environments, adapting quickly to new challenges and project requirements.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			// {
			// 	id: 1,
			// 	name: 'Twitter',
			// 	icon: <FiTwitter />,
			// 	url: 'https://twitter.com/realstoman',
			// },
			// {
			// 	id: 2,
			// 	name: 'Instagram',
			// 	icon: <FiInstagram />,
			// 	url: 'https://instagram.com/realstoman',
			// },
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://www.facebook.com/linh.vokhanh.395/',
			}
			
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
