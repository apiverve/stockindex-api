from setuptools import setup, find_packages

setup(
    name='apiverve_stockindex',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Stock Index is a tool for retrieving current and historical stock market index values. It supports the S&P 500, Dow Jones, Nasdaq Composite, VIX, Nikkei 225, and more.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/stockindex?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
