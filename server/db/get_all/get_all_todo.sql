SELECT t.trip_id, tdli.to_do_list_id, tdli.to_do_list_item_id, tdli.item_name, tdli.is_done
FROM trip AS t
JOIN to_do_list AS tdl ON t.trip_id = tdl.trip_id
JOIN to_do_list_item AS tdli ON tdl.to_do_list_id = tdli.to_do_list_id
WHERE t.trip_id = $1
ORDER BY tdli.to_do_list_item_id ASC;