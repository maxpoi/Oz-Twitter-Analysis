from flask import Flask, render_template, make_response
from flask_restful import Resource, Api
from os.path import dirname, abspath
import sys
parent_dir = dirname(dirname(abspath(__file__)))
sys.path.append(parent_dir + '/backend/api')
from get_map_reduce_result import get_afl, get_vaccine, get_5g, get_food
from get_aurin import get_age_distribution_for_citys, get_incomes_for_citys, get_level_of_education_for_citys


app = Flask(__name__)
api = Api(app)

class Homepage(Resource):
    def get(self):
        return make_response(render_template('index.html'))

class Scenario1(Resource):
    def get(self):

        afl_dict = get_afl()
        return make_response(render_template('afl_map.html', data=afl_dict))

class Scenario2(Resource):
    def get(self):
        vaccine_dict = get_vaccine()
        senti = 0
        scenario = 2
        return make_response(render_template('senti_map.html', data=vaccine_dict, sentiment=senti, scenario=scenario))

class Scenario2_positive(Resource):
    def get(self):
        vaccine_dict = get_vaccine()
        senti = 1
        scenario = 2
        return make_response(render_template('senti_map.html', data=vaccine_dict, sentiment=senti, scenario=scenario))


class Scenario2_negative(Resource):
    def get(self):
        vaccine_dict = get_vaccine()
        senti = -1
        scenario = 2
        return make_response(render_template('senti_map.html', data=vaccine_dict, sentiment=senti, scenario=scenario))


class Scenario3(Resource):
    def get(self):

        fiveg_dict = get_5g()
        senti = 0
        scenario = 3
        return make_response(render_template('senti_map.html', data=fiveg_dict, sentiment=senti, scenario=scenario))

class Scenario3_positive(Resource):
    def get(self):
        fiveg_dict = get_5g()
        senti = 1
        scenario = 3
        return make_response(render_template('senti_map.html', data=fiveg_dict, sentiment=senti, scenario=scenario))


class Scenario3_negative(Resource):
    def get(self):
        fiveg_dict = get_5g()
        senti = -1
        scenario = 3
        return make_response(render_template('senti_map.html', data=fiveg_dict, sentiment=senti, scenario=scenario))


class Scenario4_us(Resource):
    def get(self):
        food_dict = get_food()
        rest = 0
        return make_response(render_template('food_map.html', data=food_dict, rest=rest))

class Scenario4_cn(Resource):
    def get(self):
        food_dict = get_food()
        rest = 1
        return make_response(render_template('food_map.html', data=food_dict, rest=rest))

class Scenario4_fr(Resource):
    def get(self):
        food_dict = get_food()
        rest = 2
        return make_response(render_template('food_map.html', data=food_dict, rest=rest))

class Scenario4_it(Resource):
    def get(self):
        food_dict = get_food()
        rest = 3
        return make_response(render_template('food_map.html', data=food_dict, rest=rest))

class Scenario4_jp(Resource):
    def get(self):
        food_dict = get_food()
        rest = 4
        return make_response(render_template('food_map.html', data=food_dict, rest=rest))

class Scenario4_kr(Resource):
    def get(self):
        food_dict = get_food()
        rest = 5
        return make_response(render_template('food_map.html', data=food_dict, rest=rest))

class Scenario1_chart(Resource):
    def get(self):
        afl_dict = get_afl()
        age_dist = get_age_distribution_for_citys()
        income = get_incomes_for_citys()
        return make_response(render_template('afl_charts.html', data=afl_dict, age_data=age_dist, income=income))

class Scenario2_chart(Resource):
    def get(self):
        vaccine_dict = get_vaccine()
        age_dist = get_age_distribution_for_citys()
        income = get_incomes_for_citys()
        education = get_level_of_education_for_citys()
        scenario = 2
        return make_response(render_template('scene23.html', data=vaccine_dict, age_data=age_dist, income=income, education=education, scenario=scenario))

class Scenario3_chart(Resource):
    def get(self):
        fiveg_dict = get_5g()
        age_dist = get_age_distribution_for_citys()
        income = get_incomes_for_citys()
        education = get_level_of_education_for_citys()
        scenario = 3
        return make_response(render_template('scene23.html', data=fiveg_dict, age_data=age_dist, income=income, education=education, scenario=scenario))

class Scenario4_chart(Resource):
    def get(self):
        food_dict = get_food()
        age_dist = get_age_distribution_for_citys()
        return make_response(render_template('food_chart.html', data=food_dict, age_data=age_dist))

api.add_resource(Homepage, '/')
api.add_resource(Scenario1, '/scenario1_afl')
api.add_resource(Scenario2, '/scenario2_vaccine')
api.add_resource(Scenario2_positive, '/scenario2_vaccine_positive')
api.add_resource(Scenario2_negative, '/scenario2_vaccine_negative')
api.add_resource(Scenario3, '/scenario3_5g')
api.add_resource(Scenario3_positive, '/scenario3_5g_positive')
api.add_resource(Scenario3_negative, '/scenario3_5g_negative')
api.add_resource(Scenario4_us, '/scenario4_food_us')
api.add_resource(Scenario4_cn, '/scenario4_food_cn')
api.add_resource(Scenario4_fr, '/scenario4_food_fr')
api.add_resource(Scenario4_it, '/scenario4_food_it')
api.add_resource(Scenario4_jp, '/scenario4_food_jp')
api.add_resource(Scenario4_kr, '/scenario4_food_kr')
api.add_resource(Scenario1_chart, '/scenario1_afl/details')
api.add_resource(Scenario2_chart, '/scenario2_vaccine/details')
api.add_resource(Scenario3_chart, '/scenario3_5g/details')
api.add_resource(Scenario4_chart, '/scenario4_food/details')


if __name__ == '__main__':
    app.run(debug=True)




