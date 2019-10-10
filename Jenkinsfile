pipeline {
    agent {
        docker {
            image 'node:10.16.3-jessie' 
            args '-p 3000:3000' 
        }
    } 
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'cd ./express_backend && cd ./vue_frontend && npm installn && cd .. && npm run both' 
            }
        }
    }
}