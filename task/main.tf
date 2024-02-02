provider "helm" {
  kubernetes {
    config_path    = "~/.kube/config"
  }
}

resource "helm_release" "coffee_shop" {
  name       = "test"
  chart      = "./coffee-shop"
  namespace  = "coffee-shop"
  create_namespace = true

  set {
    name  = "postgresql.primary.resources.limits.memory"
    value = var.environment == "stage" ? var.stage_memory_limit : var.prod_memory_limit
  }

  set {
    name  = "postgresql.primary.resources.requests.memory"
    value = var.environment == "stage" ? var.stage_memory_limit : var.prod_memory_limit
  }

  set {
    name  = "postgresql.readReplicas.resources.limits.memory"
    value = var.environment == "stage" ? var.stage_memory_limit : var.prod_memory_limit
  }

  set {
    name  = "postgresql.readReplicas.resources.requests.memory"
    value = var.environment == "stage" ? var.stage_memory_limit : var.prod_memory_limit
  }

  set {
    name  = "values"
    value = file("${path.module}/coffee-shop/values.yaml")
  }
}