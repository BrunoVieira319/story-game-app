provider "google" {
  project     = var.project_id
  credentials = var.account_file
  region      = var.region
  version     = "2.14"
}

resource "google_compute_instance" "app-instance" {
  name         = "app"
  machine_type = var.machine_type
  zone         = var.zone
  tags         = ["http-app"]
  boot_disk {
    auto_delete = true
    initialize_params {
      image     = var.image_name
    }
  }
  network_interface {
    network = "default"
    access_config {
    }
  }
}

resource "google_compute_firewall" "app-firewall" {
  name    = "app-firewall"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80", "3000"]
  }
  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["http-app"]
}
