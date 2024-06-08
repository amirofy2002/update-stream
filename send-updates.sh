for i in $(seq 1 1000);
do
   echo "\rpool id = $i http://localhost:3000/webhook"
    nohup curl "http://localhost:3000/webhook" \
    --header 'Content-Type: application/json' \   
    echo "\r"
   
done
