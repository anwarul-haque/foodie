module.exports = {
    apps: [{
      name: 'foodie-app',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster'
    }]
  };
  