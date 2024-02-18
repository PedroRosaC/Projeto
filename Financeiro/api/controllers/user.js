import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM financa";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO financa(`valor`, `email`, `fone`) VALUES(?)";

  const values = [
    req.body.valor,
    req.body.descricao,
    req.body.tipo,
  ];
  
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Finança criada com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE financa SET `valor` = ?, `descricao` = ?, `tipo` = ? WHERE `id` = ?";

  const values = [
    req.body.valor,
    req.body.descricao,
    req.body.tipo,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Finança atualizada com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM financa WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Finança deletada com sucesso.");
  });
};