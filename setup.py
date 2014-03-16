from setuptools import setup, find_packages
import os

version = '1.0'

setup(name='diazotheme.plonecom',
      version=version,
      description="Theme for Plone.Com",
      long_description=open("README.rst").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
        ],
      keywords='',
      author='',
      author_email='',
      url='http://svn.plone.org/svn/collective/',
      license='GPL',
      packages=find_packages('src'),
      namespace_packages=['diazotheme'],
      include_package_data=True,
      zip_safe=False,
      package_dir={'': 'src'},
      install_requires=[
          'setuptools',
          'z3c.jbot',
          'Products.Carousel',
          'plone.app.theming',
      ],
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
