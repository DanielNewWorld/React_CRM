let initialState = {
    itemProductData: [
        {
            id: 1,
            imgSrc: "1.jpg",
            nameItem: "service 1",
            description: "Welcome to Yara Tech - Your Partner in Quality Assurance"
        },
        {
            id: 2,
            imgSrc: "../../../images/2.jpg",
            nameItem: "service 2",
            description: "Browser Compatibility: Ensuring that the website displays correctly and functions properly on different web browsers (e.g., Chrome, Firefox, Safari, Edge) and various versions of these browsers."
        },
        {
            id: 3,
            imgSrc: "../../images/3.jpg",
            nameItem: "service 3",
            description: "Responsive Design and Mobile Compatibility: Testing that the website displays correctly on different devices such as smartphones and tablets and that its design adapts to different screen sizes."
        },
        {
            id: 4,
            imgSrc: "../../images/3.jpg",
            nameItem: "service 4",
            description: "Performance: Evaluating page loading speed, optimizing resources, and assessing the resource consumption of the website."
        },
        {
            id: 5,
            imgSrc: "../../images/3.jpg",
            nameItem: "service 5",
            description: "Security: Identifying vulnerabilities on the website and testing it for protection against various types of attacks, such as SQL injections, cross-site scripting, and others."
        }
    ]
}

const servicesItemReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default servicesItemReducer;