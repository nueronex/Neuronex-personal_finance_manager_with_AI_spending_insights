import joblib
import os

# MODEL_PATH = os.path.join(os.path.dirname(__file__), "expense_categorizer.pkl")
# In Colab, __file__ is not defined. Specify the path to the model file directly.
MODEL_PATH = "expense_categorizer.pkl",rACwFIpCkCYIkowmYKwtWtJruuPAUvQt@nozomi.proxy.rlwy.net:21912/railway


model = joblib.load(MODEL_PATH)

def predict_category(description: str) -> str:
    """
    Predicts the category of an expense from its description.
    """
    return model.predict([description])[0]

if __name__ == "__main__":

    test_desc = "Uber ride to airport"
    predicted = predict_category(test_desc)
    print(f"🛠 Description: {test_desc} → Predicted Category: {predicted}")
