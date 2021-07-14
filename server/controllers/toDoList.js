async function createToDoList(req, res) {
  const { tripId } = req.body;
  const db = req.app.get('db');
  const toDoList = await db.to_do_list
    .add_to_do_list(tripId)
    .catch((err) => console.log(err));

  res.status(200).json(toDoList[0]);
}

function addToDoListItem(req, res) {
  const { toDoListId, itemName, isDone } = req.body;
  const db = req.app.get('db');
  db.to_do_list
    .add_to_do_list_item(toDoListId, itemName, isDone)
    .then(() => res.status(200).json('Item has been added to the to do list'))
    .catch((err) => console.log(err));
}

async function updateToDoListItem(req, res) {
  const { toDoListItemId, itemName, isDone } = req.body;
  const db = req.app.get('db');
  const result = await db.to_do_list.get_to_do_list_item(toDoListItemId);
  const oldItem = result[0];
  const newItem = {
    newItemName: itemName || oldItem.item_name,
    newIsDone: isDone || oldItem.is_done,
  };

  const updatedItem = await db.to_do_list
    .update_to_do_list_item([
      toDoListItemId,
      newItem.newItemName,
      newItem.newIsDone,
    ])
    .catch((err) => console.log(err));

  res.status(200).json(updatedItem[0]);
}

function deleteToDoListItem(req, res) {
  const { toDoListItemId } = req.body;
  const db = req.app.get('db');

  db.to_do_list
    .delete_to_do_list_item(toDoListItemId)
    .then(() =>
      res.status(200).json('Item has been deleted from the to do list')
    )
    .catch((err) => console.log(err));
}

function resetToDo(req, res) {
  const db = req.app.get('db');
  db.to_do_list
    .reset_to_do_list()
    .then(() => res.status(200).json('To do has been reset'))
    .catch((err) => console.log(err));
}

module.exports = {
  createToDoList,
  addToDoListItem,
  updateToDoListItem,
  deleteToDoListItem,
  resetToDo,
};
