from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')

a = model.encode("Data Scientist")
b = model.encode("Machine Learning Engineer")
c = model.encode("Pastry Chef")

print("Data Scientist vs ML Engineer:", util.cos_sim(a, b).item())
print("Data Scientist vs Pastry Chef:", util.cos_sim(a, c).item())