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
  Chip,
  Stack,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  ShoppingBagOutlined,
  Spa,
  AutoAwesome,
  WaterDrop,
  FavoriteBorder,
} from "@mui/icons-material";

const empty = {
  name: "",
  price: "",
  image: "",
  category: "",
  description: "",
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isAdmin = user?.role === "admin";

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/products");
      const data = res.data?.products || res.data || [];
      const list = Array.isArray(data) ? data : [];
      setProducts(list);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      const list = res.data?.categories || [];
      setCategories(list.map((c) => c.name).filter(Boolean));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    const q = search.trim().toLowerCase();
    const filtered = products.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" ||
        (p.category || "").toLowerCase() === selectedCategory.toLowerCase();
      const haystack =
        `${p.name || ""} ${p.description || ""} ${p.category || ""}`.toLowerCase();
      const matchesSearch = !q || haystack.includes(q);
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [products, search, selectedCategory]);

  const handleBuy = (productName) => {
    toast.success(`${productName} purchased successfully!`, {
      style: {
        borderRadius: "0px",
        background: "#3D2B1F",
        color: "#fff",
        fontWeight: "bold",
      },
    });
  };

  const openAdd = () => {
    setEditId("");
    setForm({ ...empty, category: categories[0] || "" });
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
    if (!isAdmin) return toast.error("Admin only");
    try {
      if (editId) {
        await api.put(`/products/${editId}`, form);
        toast.success("Product updated");
      } else {
        await api.post("/products", form);
        toast.success("Product added");
      }
      setOpen(false);
      fetchProducts();
    } catch (err) {
      console.log(err);
      toast.error("Save failed");
    }
  };

  const del = async (id) => {
    if (!isAdmin) return;
    if (!window.confirm("Delete this product?")) return;
    try {
      await api.delete(`/products/${id}`);
      toast.success("Deleted");
      fetchProducts();
    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 2, md: 5 },
        bgcolor: "#FAF7F2",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[Spa, AutoAwesome, WaterDrop, FavoriteBorder].map((Icon, i) => (
        <Icon
          key={i}
          sx={{
            position: "absolute",
            fontSize: 160,
            color: "#8E735B",
            opacity: 0.05,
            top: `${i * 25}%`,
            left: i % 2 === 0 ? "2%" : "90%",
            transform: `rotate(${i * 45}deg)`,
          }}
        />
      ))}

      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 4, color: "#8E735B", fontWeight: 700 }}
            >
              COLLECTION MANAGEMENT
            </Typography>
            <Typography variant="h3" fontWeight={900} color="#5C4033">
              Our Products
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            sx={{ width: { xs: "100%", md: "auto" } }}
          >
            <TextField
              size="small"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ bgcolor: "#fff", borderRadius: 1, minWidth: 250 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#8E735B" }} />
                  </InputAdornment>
                ),
              }}
            />
            {isAdmin && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={openAdd}
                sx={{
                  bgcolor: "#8E735B",
                  fontWeight: 800,
                  "&:hover": { bgcolor: "#5C4033" },
                }}
              >
                Add
              </Button>
            )}
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          mb={5}
          justifyContent="center"
        >
          {["All", ...categories].map((c) => (
            <Chip
              key={c}
              label={c}
              onClick={() => setSelectedCategory(c)}
              sx={{
                fontWeight: 800,
                bgcolor: selectedCategory === c ? "#8E735B" : "#fff",
                color: selectedCategory === c ? "#fff" : "#8E735B",
                border: "1px solid #E8D8C3",
                "&:hover": { bgcolor: "#8E735B", color: "#fff" },
              }}
            />
          ))}
        </Stack>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress sx={{ color: "#8E735B" }} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            {filteredProducts.map((p) => (
              <Card
                key={p._id}
                elevation={0}
                sx={{
                  borderRadius: 0,
                  border: "1px solid #E8D8C3",
                  bgcolor: "rgba(255,255,255,0.7)",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={p.image || " "}
                  sx={{ height: 400, objectFit: "cover" }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "#8E735B", fontWeight: 800 }}
                  >
                    {p.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={900}
                    color="#5C4033"
                    sx={{ mt: 0.5 }}
                  >
                    {p.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, height: 40, overflow: "hidden" }}
                  >
                    {p.description}
                  </Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={3}
                  >
                    <Typography variant="h6" fontWeight={900} color="#8E735B">
                      ${p.price}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                      {!isAdmin && (
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<ShoppingBagOutlined />}
                          onClick={() => handleBuy(p.name)}
                          sx={{
                            bgcolor: "#3D2B1F",
                            color: "#fff",
                            fontWeight: 800,
                            borderRadius: 0,
                            "&:hover": { bgcolor: "#5C4033" },
                          }}
                        >
                          Buy Now
                        </Button>
                      )}

                      {isAdmin && (
                        <>
                          <IconButton
                            size="small"
                            onClick={() => openEdit(p)}
                            sx={{ color: "#8E735B" }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => del(p._id)}
                            sx={{ color: "#D9C5B2" }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </>
                      )}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ fontWeight: 900, color: "#5C4033" }}>
          {editId ? "Update Product" : "New Product"}
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} pt={1}>
            <TextField
              fullWidth
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
            <TextField
              fullWidth
              label="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <TextField
              select
              fullWidth
              label="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {categories.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{ color: "#8E735B", fontWeight: 800 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={save}
            sx={{ bgcolor: "#5C4033", fontWeight: 900, px: 4, borderRadius: 0 }}
          >
            {editId ? "Save Changes" : "Add Product"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
