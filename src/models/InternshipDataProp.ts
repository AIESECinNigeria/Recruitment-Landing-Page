interface InternshipDataProp {
    id: string;
	logoUrl: string;
	logoAlt: string;
	opportunityTitle: string;
	opportunityText: string;
	organizationsText: string;
	durationText: string;
	learnMoreLink: string;
	viewMoreOpportunitiesLink: string;
	opportunities: {
		id: string;
		imgUrl: string;
		opportunityTitle: string;
		location: string;
	}[];
};

export default InternshipDataProp;