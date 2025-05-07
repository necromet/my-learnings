from simplegmail import Gmail
from simplegmail.query import construct_query

gmail = Gmail()

# Construct our two queries separately
query_params = {
    "newer_than": (4, "day"),
    "older_than": (2, "day")
}

messages = gmail.get_messages(query=construct_query(query_params))

for message in messages:
    print("To: " + message.recipient)
    print("From: " + message.sender)
    print("Subject: " + message.subject)
    print("Date: " + message.date)
    print("Preview: " + message.snippet)
    # print("Message Body: " + message.plain)