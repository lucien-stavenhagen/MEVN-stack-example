pipeline {
    agent {
        docker {
            image 'node:10.16.3-jessie' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'cd ./express_backend && npm install' 
            }
        }
    }
}