.. _api_MetaType:

MetaType
========

Inherited: None

.. _api_MetaType_description:

Description
-----------

This class is designed for retrieving of runtime type information with additional functionality.

Some of registered types can be automatically converted to different types with MetaType::convert functunction. The following conversions are predefined:


 TypeConvert to
MetaType::BOOLEANMetaType::INTEGER, MetaType::FLOAT, MetaType::STRING
MetaType::INTEGERMetaType::BOOLEAN, MetaType::FLOAT, MetaType::STRING, MetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::FLOATMetaType::BOOLEAN, MetaType::INTEGER, MetaType::STRING, MetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::STRINGMetaType::BOOLEAN, MetaType::INTEGER, MetaType::FLOAT
MetaType::VARIANTMAP
MetaType::VARIANTLISTMetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4, MetaType::MATRIX3, MetaType::MATRIX4, MetaType::QUATERNION
MetaType::VECTOR2MetaType::VARIANTLIST, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::VECTOR3MetaType::VARIANTLIST, MetaType::VECTOR4
MetaType::VECTOR4MetaType::VARIANTLIST
MetaType::QUATERNIONMetaType::VARIANTLIST
MetaType::MATRIX3MetaType::VARIANTLIST
MetaType::MATRIX4MetaType::VARIANTLIST


To convert values to other types developer should define own conversion type function using MetaType::registerConverter() function



.. _api_MetaType_public:

Public Methods
--------------

+------------+-------------------------------------------------------------------------------------------+
|            | :ref:`MetaType<api_MetaType_a74cdf1e>` (const MetaType::Table * table)                    |
+------------+-------------------------------------------------------------------------------------------+
|       bool | :ref:`compare<api_MetaType_43b50dec>` (const void * left, const void * right) const       |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`construct<api_MetaType_7df9320e>` (void * where, const void * copy = nullptr) const |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`create<api_MetaType_f1d678a0>` (const void * copy = nullptr) const                  |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`destroy<api_MetaType_ed36af80>` (void * data) const                                 |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`destruct<api_MetaType_0ca15492>` (void * data) const                                |
+------------+-------------------------------------------------------------------------------------------+
|        int | :ref:`flags<api_MetaType_892bd573>` () const                                              |
+------------+-------------------------------------------------------------------------------------------+
|       bool | :ref:`isValid<api_MetaType_160438bd>` () const                                            |
+------------+-------------------------------------------------------------------------------------------+
| const char | :ref:`name<api_MetaType_280ac96f>` () const                                               |
+------------+-------------------------------------------------------------------------------------------+
|        int | :ref:`size<api_MetaType_bec52136>` () const                                               |
+------------+-------------------------------------------------------------------------------------------+



.. _api_MetaType_static:

Static Methods
--------------

+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`compare<api_MetaType_ad4b0f2c>` (const void * left, const void * right, uint32_t  type)                         |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`construct<api_MetaType_63ae7f4c>` (uint32_t  type, void * where, const void * copy = nullptr)                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`convert<api_MetaType_cb1e5329>` (const void * from, uint32_t  fromType, void * to, uint32_t  toType)            |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`create<api_MetaType_671abd4c>` (uint32_t  type, const void * copy = nullptr)                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`destroy<api_MetaType_5e2f786a>` (uint32_t  type, void * data)                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`destruct<api_MetaType_5807e3ad>` (uint32_t  type, void * data)                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`hasConverter<api_MetaType_483ba97f>` (uint32_t  from, uint32_t  to)                                             |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                      const char | :ref:`name<api_MetaType_dba864f3>` (uint32_t  type)                                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`registerConverter<api_MetaType_a67125e3>` (uint32_t  from, uint32_t  to, MetaType::converterCallback  function) |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`registerType<api_MetaType_d3620e81>` (MetaType::Table & table)                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                             int | :ref:`size<api_MetaType_cda3e74f>` (uint32_t  type)                                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|    :ref:`MetaType::Table<api_MetaType_Table>` * | :ref:`table<api_MetaType_30e1f5a9>` (uint32_t  type)                                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`type<api_MetaType_0f631cab>` (const char * name)                                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`type<api_MetaType_76f9a3e4>` (const type_info & type)                                                           |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|  :ref:`MetaType::TypeMap<api_MetaType_TypeMap>` | :ref:`types<api_MetaType_ce5f7d62>` ()                                                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`unregisterType<api_MetaType_c32804d7>` (MetaType::Table & table)                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+

.. _api_MetaType_methods:

Methods Description
-------------------

.. _api_MetaType_a74cdf1e:

**MetaType::MetaType** (:ref:`MetaType::Table<api_MetaType::Table>` * *table*)

Constructs MetaType object which will contain information provided in a *table*.

----

.. _api_MetaType_43b50dec:

 bool **MetaType::compare** (void * *left*, void * *right*) const

Returns true in case of *left* value is equal to *right* value; otherwise returns false.

----

.. _api_MetaType_ad4b0f2c:

 bool **MetaType::compare** (void * *left*, void * *right*, uint32_t  *type*)

Returns true in case of *left* value is equal to *right* value with *type*; otherwise returns false.

----

.. _api_MetaType_7df9320e:

 void **MetaType::construct** (void * *where*, void * *copy* = nullptr) const

Constructs a value of the given type, which represented by current MetaType object in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_63ae7f4c:

 void **MetaType::construct** (uint32_t  *type*, void * *where*, void * *copy* = nullptr)

Constructs a value of the given *type* in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_cb1e5329:

 bool **MetaType::convert** (void * *from*, uint32_t  *fromType*, void * *to*, uint32_t  *toType*)

Tries *to* convert value *from* with type *from*Type *to* type *to*Type and place the result *to* output value *to*. Returns true if conversion succeed; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_f1d678a0:

 void **MetaType::create** (void * *copy* = nullptr) const

Returns a *copy* of *copy* value, with type, which represented by current MetaType object. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_671abd4c:

 void **MetaType::create** (uint32_t  *type*, void * *copy* = nullptr)

Returns a *copy* of *copy* value, with *type*. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_ed36af80:

 void **MetaType::destroy** (void * *data*) const

Destroys the value with type, which represented by current MetaType object, located at *data*. This function calls delete operator.

----

.. _api_MetaType_5e2f786a:

 void **MetaType::destroy** (uint32_t  *type*, void * *data*)

Destroys the value with *type*, located at *data*. This function calls delete operator.

----

.. _api_MetaType_0ca15492:

 void **MetaType::destruct** (void * *data*) const

Destructs the value with type, which represented by current MetaType object, located at *data*. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_5807e3ad:

 void **MetaType::destruct** (uint32_t  *type*, void * *data*)

Destructs the value with *type*, located at *data*. Unlike destroy(), this function only invokes the *type*'s destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_892bd573:

 int **MetaType::flags** () const

Returns flags for the type.

----

.. _api_MetaType_483ba97f:

 bool **MetaType::hasConverter** (uint32_t  *from*, uint32_t  *to*)

Returns true in case of type *from* can be converted *to* type *to*; otherwise returns false.

----

.. _api_MetaType_160438bd:

 bool **MetaType::isValid** () const

Returns true in case of this MetaType object contain valid information; otherwise returns false.

----

.. _api_MetaType_280ac96f:

const char **MetaType::name** () const

Returns the name of type.

----

.. _api_MetaType_dba864f3:

const char **MetaType::name** (uint32_t  *type*)

Returns a name of *type* with *type* ID. Returns nullptr for unregistered *type*.

----

.. _api_MetaType_a67125e3:

 bool **MetaType::registerConverter** (uint32_t  *from*, uint32_t  *to*, :ref:`MetaType::converterCallback<api_MetaType::converterCallback>`  *function*)

Registers the possibility *to* convert value type *from* *to* type *to* with conversion *function*. Returns true in case of converter successfully registered; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_d3620e81:

 uint32_t **MetaType::registerType** (:ref:`MetaType::Table<api_MetaType::Table>` & *table*)

Registers type by type MetaType::Table *table*. Use registerMetaType() instead this function. Returns an ID of registered type.

----

.. _api_MetaType_bec52136:

 int **MetaType::size** () const

Returns the size of type.

----

.. _api_MetaType_cda3e74f:

 int **MetaType::size** (uint32_t  *type*)

Returns a size of *type* with *type* ID. Returns 0 for unregistered *type*.

----

.. _api_MetaType_30e1f5a9:

 :ref:`MetaType::Table<api_MetaType::Table>` * **MetaType::table** (uint32_t  *type*)

Returns *type* information table if *type* registered; otherwise returns nullptr.

----

.. _api_MetaType_0f631cab:

 uint32_t **MetaType::type** (char * *name*)

Returns an ID of type with type *name*. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_76f9a3e4:

 uint32_t **MetaType::type** (:ref:`type_info<api_type_info>` & *type*)

Returns an ID of *type* with *type* info. Returns MetaType::INVALID for unregistered *type*.

----

.. _api_MetaType_ce5f7d62:

 :ref:`MetaType::TypeMap<api_MetaType::TypeMap>`  **MetaType::types** ()

Returns a table of registered types.

----

.. _api_MetaType_c32804d7:

 void **MetaType::unregisterType** (:ref:`MetaType::Table<api_MetaType::Table>` & *table*)

Unregisters type by type MetaType::Table *table*. Use unregisterMetaType() instead this function.


