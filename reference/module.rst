.. _api_Module:

Module
======

Inherited: None

.. _api_Module_description:

Description
-----------

Thunder Engine uses modules to extend engine capabilities. Every engine module must be inherited from the Module class. This class contains basic information about the content of the module and creates some of the necessary in-module systems.



.. _api_Module_public:

Public Methods
--------------

+------------+-----------------------------------------------------------+
|       void | :ref:`getObject<api_Module_e567da29>` (const char * name) |
+------------+-----------------------------------------------------------+
| const char | :ref:`metaInfo<api_Module_d2c8fb79>` () const             |
+------------+-----------------------------------------------------------+



.. _api_Module_static:

Static Methods
--------------

None

.. _api_Module_methods:

Methods Description
-------------------

.. _api_Module_e567da29:

 void **Module::getObject** (char * *name*)

This function is a facory for the module. It return a pointer to constructed object with given type name.

----

.. _api_Module_d2c8fb79:

const char **Module::metaInfo** () const

Returns a module manifest in JSON format.


