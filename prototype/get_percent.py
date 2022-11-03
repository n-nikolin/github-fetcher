response = {
    "JavaScript": 15972,
    "SCSS": 7627,
    "HTML": 2312,
    "CSS": 832
}


def get_percent(response):
    total = 0
    for v in response.values():
        total += v
    print(total)
    for k, v in response.items():
        response[k] = f'{v/total*100}%'
    print(response)


get_percent(response)
# print(get_percent(response))

# {'JavaScript': '59.724039935684104%', 'SCSS': '28.519612608907003%',
#     'HTML': '8.64525296339229%', 'CSS': '3.1110944920166026%'}
