FROM alpine:latest

# Install SQLite
RUN apk --no-cache add sqlite

# Create a directory to store the database
WORKDIR /data

# Copy your SQLite database file into the container
COPY database/initial-db.sqlite /data/

# Copy your init SQL script into the container
COPY database/init.sql /data/

# Run the SQL script to initialize the database and keep the container running
CMD ["sh", "-c", "sqlite3 /data/db.sqlite < /data/init.sql && tail -f /dev/null"]
