terraform {
  backend "s3" {
  }
}

provider "aws" {
  region = var.primary_region

  assume_role {
    role_arn = "arn:aws:iam::${var.account_id}:role/role-to-assume"
    duration = "1h"
  }

  default_tags {
    tags = {
      service = local.service_name
      component = local.component
    }
  }
}

provider "aws" {
  alias  = "secondary"
  region = var.secondary_region

  assume_role {
    role_arn = "arn:aws:iam::${var.account_id}:role/role-to-assume"
    duration = "1h"
  }

  default_tags {
    tags = {
      service = local.service_name
      component = local.component
    }
  }
}
