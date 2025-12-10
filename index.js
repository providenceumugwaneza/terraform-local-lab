terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.4"
    }
  }
}

provider "local" {}

# Create a file named index.js with content
resource "local_file" "webapp_app" {
  filename = "${path.module}/webapp/src/index.js"  # File path
  content  = <<EOF
console.log("Hello, Terraform-created web app!");
EOF
}

# Output the full path of the created file
output "webapp_file_path" {
  value       = local_file.webapp_app.filename
  description = "The full path to the web application's index.js file."
}
