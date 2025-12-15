import datetime

a = datetime.datetime(2025, 2, 24, 12, 0, 0)
b = a + datetime.timedelta(days=30)

print(b)