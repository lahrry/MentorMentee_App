import mysql.connector

db_config = {
    'host': 'localhost',
    'user': 'your_username',
    'passwd': 'your_password',
    'database': 'your_database_name'
}

create_table_commands = [
    """
    CREATE TABLE IF NOT EXISTS UserData (
        UserID INT PRIMARY KEY,
        UserEmail VARCHAR(255),
        UserPassword VARCHAR(255),
        UserType ENUM('mentor', 'mentee', 'admin')
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS MentorMenteeMap (
        MentorID INT,
        MenteeID INT,
        MeetingTimes DATETIME
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS MeetingsTable (
        MeetingsID INT PRIMARY KEY,
        MentorID INT,
        MenteeID INT,
        MeetingDate DATETIME,
        Agenda VARCHAR(255),
        Notes VARCHAR(255)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS ChatsTable (
        ChatsID INT PRIMARY KEY,
        MentorID INT,
        MenteeID INT,
        Message VARCHAR(255),
        Timestamp DATETIME
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS MediaStorageTable (
        MediaID INT PRIMARY KEY,
        UserID INT,
        MediaURL VARCHAR(255),
        MediaType ENUM('image', 'video', 'document'),
        Timestamp DATETIME
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS SessionTable (
        UserID INT,
        LoginTime DATETIME
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS UserDetailsTable (
        RecordID INT PRIMARY KEY,
        UserID INT,
        AttributeKey VARCHAR(255),
        AttributeValue VARCHAR(255)
    )
    """
]

connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()

for command in create_table_commands:
    cursor.execute(command)

cursor.close()
connection.close()
