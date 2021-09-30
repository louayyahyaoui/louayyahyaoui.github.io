// config.js
module.exports = {
    github: {
        username: 'louayyahyaoui', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 4, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ['React-Tutorials','FormationLaravel','Angular-Client-IP-Address','Smart-Virtual-Classroom1','louayyahyaoui','LouayProject'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'louay-yahyaoui-esprit',
        twitter: '',
        facebook: 'louay.yahyaoui.12',
        dribbble: '',
        behance: '',
        medium: '',
        devto: 'louayyahyaoui',
        website: 'https://louay-yahyaoui.herokuapp.com/',
        email: 'louay.yahyaoui@esprit.tn'
    },
    skills: [
        'React.js',
        'Node.js',
        'Angular 2/9',
        'PHP',
        'Symfony 3.4/4',
        'Laravel 8',
        'JavaScript',
        'Jquery',
        'Ajax',
        'MySQL',
        'Github',
        'CSS',
        'Antd',
        'Semantic UI',
        'Bootstrap',
        'Heroku',
        'AWS',
    ],
    experiences: [
        { 
            company: 'TsunamIT',
            position: 'Full-stack web developer (Internship)',
            from: 'July 2021',
            to: 'August 2021'
        },
        { 
            company: 'ESPRIT engineer school',
            position: 'Full-stack web developer (Internship)',
            from: 'June 2021',
            to: 'July 2021'
        },
        { 
            company: 'PicoSoft S.A.R.L',
            position: 'Summer Internship',
            from: 'July 2020',
            to: ' August 2020'
        },
        { 
            company: 'Attijari Bank',
            position: 'Summer Internship',
            from: 'June 2019',
            to: ' July 2019'
        }
    ],
    education: [
        { 
            institution: 'ESPRIT engineer school',
            degree: 'IT Engineering degree',
            from: '2017',
            to: 'Present'
        },
        { 
            institution: 'Chebbi High School',
            degree: 'Baccalaureat diploma',
            from: '2013',
            to: '2017',
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'louayyahyaoui',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: 'G-XCRS9YGPJZ' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}