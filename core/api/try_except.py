from django.core.exceptions import ValidationError
from core.settings import DEBUG


def try_except(func):
    if DEBUG:
        def func_wrapper(*args, **kwargs):
            try:
                return func(*args, **kwargs)
            except ValidationError as e:
                print(e)
                raise ValidationError(e)
            except Exception as e:
                print('!!! error !!!')
                print(func.__name__ + ': ')
                print(e)
                print('-------------')
                raise Exception(e)
        return func_wrapper
    return func
