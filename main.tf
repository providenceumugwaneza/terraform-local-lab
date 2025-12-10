terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.4"
    }
  }
}

provider "local" {}

# Create index.js inside webapp/src
resource "local_file" "webapp_app" {
  filename = "${path.module}/webapp/src/index.js"
  content  = <<EOF
console.log("Hello, Terraform-created web app!");
EOF
}

# Output the path of the created file
output "webapp_file_path" {
  value       = local_file.webapp_app.filename
  description = "The full path to the web application's index.js file."
}
