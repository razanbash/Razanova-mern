import React, { useEffect, useState } from "react";
import api from "../api";
import toast from "react-hot-toast";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const empty = {
  name: "",
  price: "",
  image: "",
  category: "",
  description: "",
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);

  const isAdmin =
    JSON.parse(localStorage.getItem("user") || "null")?.role === "admin";

  //..................................................................
  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        const data = res?.data?.products || res?.data || [];
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load products");
        setLoading(false);
      });
  }, []);

  //..................................................................
  const openAdd = () => {
    setEditId(null);
    setForm(empty);
    setOpen(true);
  };

  //..................................................................
  const openEdit = (p) => {
    setEditId(p?._id || p?.id);
    setForm({
      name: p?.name || "",
      price: p?.price ?? "",
      image: p?.image || "",
      category: p?.category || "",
      description: p?.description || "",
    });
    setOpen(true);
  };

  //..................................................................
  const save = async () => {
    if (!isAdmin) return toast.error("Admin only");
    if (!form.name.trim()) return toast.error("Name required");

    const body = {
      name: form.name.trim(),
      price: Number(form.price || 0),
      image: form.image.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
    };

    try {
      if (!editId) {
        const res = await api.post("/products", body);
        const created = res?.data?.product || res?.data;

        setProducts((prev) => [created, ...prev]);
        toast.success("Added");
      } else {
        const res = await api.put(`/products/${editId}`, body);
        const updated = res?.data?.product || res?.data;

        setProducts((prev) =>
          prev.map((p) =>
            String(p?._id || p?.id) === String(editId)
              ? { ...p, ...(updated || body) }
              : p,
          ),
        );

        const r = await api.get("/products");
        const data = r?.data?.products || r?.data || [];
        setProducts(Array.isArray(data) ? data : []);

        toast.success("Updated");
      }

      setOpen(false);
    } catch {
      toast.error("Save failed");
    }
  };

  const del = async (p) => {
    if (!isAdmin) return toast.error("Admin only");

    if (!window.confirm("Delete this product?")) return;

    const pid = p?._id || p?.id;

    try {
      setProducts((prev) => prev.filter((x) => (x?._id || x?.id) !== pid));

      await api.delete(`/products/${pid}`);
      toast.success("Deleted");
    } catch {
      toast.error("Delete failed");

      const r = await api.get("/products");
      const data = r?.data?.products || r?.data || [];
      setProducts(Array.isArray(data) ? data : []);
    }
  };

  return (
    <Box sx={{ bgcolor: "white", minHeight: "100vh", p: { xs: 2, md: 3 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5" fontWeight={800}>
          Products
        </Typography>

        {isAdmin && (
          <Button variant="contained" startIcon={<AddIcon />} onClick={openAdd}>
            Add
          </Button>
        )}
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              background: "#eee3dd",
            },
          }}
        >
          {products.map((p) => (
            <Card
              key={p?._id || p?.id}
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                boxShadow: 1,
                overflow: "hidden",
                maxWidth: 480,
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                image={p?.image || "https://via.placeholder.com/400"}
                alt={p?.name || "product"}
                sx={{
                  height: 450,
                  objectFit: "cover",
                }}
              />

              <CardContent>
                <Typography fontWeight={800} noWrap>
                  {p?.name}
                </Typography>

                <Typography sx={{ mt: 0.5 }}>${p?.price}</Typography>

                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {p?.category}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1, opacity: 0.85 }}>
                  {p?.description
                    ? p.description.length > 80
                      ? p.description.slice(0, 80) + "..."
                      : p.description
                    : "No description"}
                </Typography>

                {isAdmin && (
                  <Box sx={{ mt: 1 }}>
                    <IconButton onClick={() => openEdit(p)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => del(p)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{editId ? "Edit Product" : "Add Product"}</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            sx={{ mt: 1 }}
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            fullWidth
            sx={{ mt: 1 }}
            label="Price"
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <TextField
            fullWidth
            sx={{ mt: 1 }}
            label="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <TextField
            fullWidth
            sx={{ mt: 1 }}
            label="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <TextField
            fullWidth
            sx={{ mt: 1 }}
            label="Description"
            multiline
            minRows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={save}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
