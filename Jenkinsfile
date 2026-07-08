pipeline {
    agent any
    environment {
        BACKEND_IMAGE = "task-backend"
        FRONTEND_IMAGE = "task-frontend"
        VERSION = "${BUILD_NUMBER}"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Images') {
            steps {
                sh "docker build -t ${BACKEND_IMAGE}:${VERSION} ./backend"
                sh "docker build -t ${FRONTEND_IMAGE}:${VERSION} ./frontend"
            }
        }
        stage('Update YAMLs') {
            steps {
                sh "sed -i 's/VERSION_TAG/${VERSION}/g' k8s/backend-deployment.yaml"
                sh "sed -i 's/VERSION_TAG/${VERSION}/g' k8s/frontend-deployment.yaml"
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh "kubectl apply -f k8s/"
            }
        }
    }
