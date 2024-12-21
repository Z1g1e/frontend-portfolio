from sklearn.feature_extraction.text import TfidfVectorizer

# Тексти для аналізу
texts = [
    "Natural Language Processing enables machines to understand human language.",
    "Machine learning is an essential part of artificial intelligence.",
    "Text mining helps extract valuable insights from data."
]

# Ініціалізуємо TF-IDF векторизатор
vectorizer = TfidfVectorizer()

# Трансформуємо тексти у TF-IDF матрицю
X = vectorizer.fit_transform(texts)

# Виведення результатів
print("TF-IDF матриця:")
print(X.toarray())

print("\nТерміни:")
print(vectorizer.get_feature_names_out())
