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
  const [editId, setEditId] = useState("");

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isAdmin = user?.role === "admin";

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/products");
      const data = res.data?.products || res.data || [];
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      toast.error("Failed to load products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openAdd = () => {
    setEditId("");
    setForm(empty);
    setOpen(true);
  };

  const openEdit = (p) => {
    setEditId(p._id);
    setForm({
      name: p.name || "",
      price: p.price || "",
      image: p.image || "",
      category: p.category || "",
      description: p.description || "",
    });
    setOpen(true);
  };

  const save = async () => {
    if (!isAdmin) {
      toast.error("Admin only");
      return;
    }

    if (!form.name || !form.price) {
      toast.error("Name and Price are required");
      return;
    }

    try {
      if (editId) {
        await api.put(`/products/${editId}`, form);
        toast.success("Product updated");
      } else {
        await api.post("/products", form);
        toast.success("Product added");
      }

      setOpen(false);
      setForm(empty);
      setEditId("");
      fetchProducts();
    } catch (err) {
      toast.error(err.response?.data?.message || "Save failed");
      console.error(err);
    }
  };

  const del = async (id) => {
    if (!isAdmin) return toast.error("Admin only");
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await api.delete(`/products/${id}`);
      toast.success("Deleted");
      fetchProducts();
    } catch (err) {
      toast.error("Delete failed");
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 3,
        background: "linear-gradient(135deg, #f3eadf, #e6d2bf)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Typography variant="h5" fontWeight={900} color="#5a3e2b">
          Product Management
        </Typography>

        {isAdmin && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={openAdd}
            sx={{
              bgcolor: "#6f4e37",
              fontWeight: 800,
              "&:hover": { bgcolor: "#5a3e2b" },
            }}
          >
            Add Product
          </Button>
        )}
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
          <CircularProgress sx={{ color: "#6f4e37" }} />
        </Box>
      ) : (
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {products.map((p) => (
            <Card
              key={p._id}
              sx={{
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.85)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardMedia
                component="img"
                image={p.image || "https://via.placeholder.com/400"}
                sx={{ height: 400, objectFit: "cover" }}
                
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={900} color="#333">
                  {p.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#6f4e37"
                  fontWeight={700}
                >
                  ${p.price}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mb: 1, color: "#888" }}
                >
                  {p.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>

                {isAdmin && (
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "flex-end",
                      borderTop: "1px solid rgba(0,0,0,0.05)",
                      pt: 1,
                    }}
                  >
                    <IconButton
                      onClick={() => openEdit(p)}
                      sx={{
                        color: "#a67c52",
                        "&:hover": { bgcolor: "rgba(166,124,82,0.1)" },
                      }}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => del(p._id)}
                      sx={{
                        color: "#5d5d5d",
                        "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
                      }}
                    >
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
        <DialogTitle sx={{ fontWeight: 800, color: "#5a3e2b" }}>
          {editId ? "Edit Product" : "Add New Product"}
        </DialogTitle>

        <DialogContent dividers>
          <TextField
            fullWidth
            margin="normal"
            label="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            multiline
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={save}
            sx={{ bgcolor: "#6f4e37", "&:hover": { bgcolor: "#5a3e2b" } }}
          >
            {editId ? "Update Product" : "Create Product"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
