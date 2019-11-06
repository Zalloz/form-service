psql -f schema.sql -U postgres
node createCsvForPsql.js
echo Done!