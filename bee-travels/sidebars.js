module.exports = {

  docs: [
    'intro',
    {
      type: 'category',
      label: 'Architecture',
      items: [ 'about', 'designing',],
    },
    {
      type: 'category',
      label: 'Runtime',
      items: [{
        type: 'category',
        label: 'Node.js',
        items: ['node'],
      },{
        type: 'category',
        label: 'Python',
        items: ['python'],
      },],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: ['kube',{
        type: 'category',
        label: 'Openshift',
        items: ['openshift', {
          type: 'link',
          label: 'Using Openshift on Different Clouds', 
          href: 'https://video.ibm.com/recorded/127936835' 
        }],
      },{
        type: 'category',
        label: 'Istio',
        items: [ 'istioabout',{
          type: 'link',
          label: 'Building Istio Service Mesh', // The label that should be displayed (string).
          href: 'https://developer.ibm.com/components/istio/patterns/building-istio-service-mesh-for-microservices-app-on-kubernetes/' // The target URL (string).
        },{
          type: 'link',
          label: 'Managing Kubernetes with Istio', 
          href: 'https://video.ibm.com/recorded/127934389' 
        }],
      },
      {
        type: 'category',
        label: 'Knative',
        items: ['knativeabout',{
          type: 'link',
          label: 'Build a Knative Serverless web application', // The label that should be displayed (string).
          href: 'https://developer.ibm.com/patterns/knative-serverless-web-application/' // The target URL (string).
        }],
      },
    ],
    },
    {
      type: 'category',
      label: 'Life Cycle',
      items: [{
        type: 'category',
        label: 'Test Driven Development',
        items: ['tdd',{
          type: 'link',
          label: '5 Steps of TDD', // The label that should be displayed (string).
          href: 'https://developer.ibm.com/articles/5-steps-of-test-driven-development/' // The target URL (string).
        },{
          type: 'link',
          label: 'Use TDD in a Node.js Application', // The label that should be displayed (string).
          href: 'https://developer.ibm.com/patterns/use-test-driven-development-to-build-a-nodejs-application/' // The target URL (string).
        },{
          type: 'link',
          label: 'How TDD is used in Bee Travels', // The label that should be displayed (string).
          href: 'https://developer.ibm.com/videos/webcast-wednesdays-april-29th-edition/' // The target URL (string).
        }],
      }],
    },

  ],
};