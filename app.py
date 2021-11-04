from flask import Flask, request, render_template
from catboost import CatBoostClassifier

app = Flask(__name__)
model = CatBoostClassifier()
model.load_model('final_model', format='cbm')
feature = ['amount_tsh', 'date', 'funder', 'gps_height',
       'installer', 'longitude', 'latitude', 'wpt_name', 'num_private',
       'basin', 'subvillage', 'region', 'region_code', 'district_code', 'lga',
       'ward', 'population', 'public_meeting', 'recorded_by',
       'scheme_management', 'scheme_name', 'permit', 'construction_year',
       'extraction_type', 'extraction_type_group', 'extraction_type_class',
       'management', 'management_group', 'payment', 'payment_type',
       'water_quality', 'quality_group', 'quality_group', 'quantity_group',
       'source', 'source_type', 'source_class', 'waterpoint_type',
       'waterpoint_type_group']
classes = {0:'functional', 2:'functional needs repair', 1:'non functional'}
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
   
    input=request.form.to_dict()
    x = [input[col] for col in feature]
    prediction = model.predict(x)

    
    return render_template("home.html", prediction = classes[prediction[0]],  longitude = input['longitude'],  latitude = input['latitude'])


if __name__ == "__main__":
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    app.run(debug=True)