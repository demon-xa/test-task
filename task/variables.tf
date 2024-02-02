variable "environment" {
  type    = string
  default = "stage"
}

variable "stage_memory_limit" {
  type    = string
  default = "256Mi"
}

variable "prod_memory_limit" {
  type    = string
  default = "512Mi"
}
