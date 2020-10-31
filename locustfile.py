import time
from locust import HttpUser, between, task

class QuickstartUser(HttpUser):
  wait_time = between(1, 2)

  @task
  def get_users(self):
    self.client.get("/api/users/")