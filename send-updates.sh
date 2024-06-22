declare topic=$1
for i in $(seq 1 1000);
do
   echo "\rpool id = $i http://localhost:3000/webhook/${topic}"
    curl "http://localhost:3000/webhook/${topic}" \
    --header 'Content-Type: application/json'   
   echo "\r"
   
   
done
