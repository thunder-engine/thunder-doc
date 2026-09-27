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
|            | :ref:`MetaType<api_MetaType_8cab407e>` (const MetaType::Table * table)                    |
+------------+-------------------------------------------------------------------------------------------+
|       bool | :ref:`compare<api_MetaType_95ce8f13>` (const void * left, const void * right) const       |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`construct<api_MetaType_5ca743e8>` (void * where, const void * copy = nullptr) const |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`create<api_MetaType_0abf1625>` (const void * copy = nullptr) const                  |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`destroy<api_MetaType_f104edb9>` (void * data) const                                 |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`destruct<api_MetaType_1423e6c8>` (void * data) const                                |
+------------+-------------------------------------------------------------------------------------------+
|        int | :ref:`flags<api_MetaType_e0f564a3>` () const                                              |
+------------+-------------------------------------------------------------------------------------------+
|       bool | :ref:`isValid<api_MetaType_f80de32b>` () const                                            |
+------------+-------------------------------------------------------------------------------------------+
| const char | :ref:`name<api_MetaType_f45ceda0>` () const                                               |
+------------+-------------------------------------------------------------------------------------------+
|        int | :ref:`size<api_MetaType_bf642de5>` () const                                               |
+------------+-------------------------------------------------------------------------------------------+



.. _api_MetaType_static:

Static Methods
--------------

+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`compare<api_MetaType_b0ad4e39>` (const void * left, const void * right, uint32_t  type)                         |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`construct<api_MetaType_06ec7f31>` (uint32_t  type, void * where, const void * copy = nullptr)                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`convert<api_MetaType_53d9a7bf>` (const void * from, uint32_t  fromType, void * to, uint32_t  toType)            |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`create<api_MetaType_b4c0a325>` (uint32_t  type, const void * copy = nullptr)                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`destroy<api_MetaType_7e65a120>` (uint32_t  type, void * data)                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`destruct<api_MetaType_dc36b824>` (uint32_t  type, void * data)                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`hasConverter<api_MetaType_17520638>` (uint32_t  from, uint32_t  to)                                             |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                      const char | :ref:`name<api_MetaType_a682739b>` (uint32_t  type)                                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`registerConverter<api_MetaType_83c9b216>` (uint32_t  from, uint32_t  to, MetaType::converterCallback  function) |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`registerType<api_MetaType_c5ef8029>` (MetaType::Table & table)                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                             int | :ref:`size<api_MetaType_dea72463>` (uint32_t  type)                                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|    :ref:`MetaType::Table<api_MetaType_Table>` * | :ref:`table<api_MetaType_be4a69c0>` (uint32_t  type)                                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`type<api_MetaType_c579d831>` (const char * name)                                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`type<api_MetaType_4a75db13>` (const type_info & type)                                                           |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|  :ref:`MetaType::TypeMap<api_MetaType_TypeMap>` | :ref:`types<api_MetaType_b5934d02>` ()                                                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`unregisterType<api_MetaType_7eadf013>` (MetaType::Table & table)                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+

.. _api_MetaType_methods:

Methods Description
-------------------

.. _api_MetaType_8cab407e:

**MetaType::MetaType** (:ref:`MetaType::Table<api_MetaType_Table>` * *table*)

Constructs MetaType object which will contain information provided in a table.

----

.. _api_MetaType_95ce8f13:

 bool **MetaType::compare** (void * *left*, void * *right*) const

Returns true in case of *left* value is equal to *right* value; otherwise returns false.

----

.. _api_MetaType_b0ad4e39:

 bool **MetaType::compare** (void * *left*, void * *right*, uint32_t  *type*)

Returns true in case of *left* value is equal to *right* value with type; otherwise returns false.

----

.. _api_MetaType_5ca743e8:

 void **MetaType::construct** (void * *where*, void * *copy* = nullptr) const

Constructs a value of the given type, which represented by current MetaType object in the existing memory addressed by where, that is a *copy* of copy, and returns where. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_06ec7f31:

 void **MetaType::construct** (uint32_t  *type*, void * *where*, void * *copy* = nullptr)

Constructs a value of the given *type* in the existing memory addressed by where, that is a *copy* of copy, and returns where. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_53d9a7bf:

 bool **MetaType::convert** (void * *from*, uint32_t  *fromType*, void * *to*, uint32_t  *toType*)

Tries *to* convert value *from* with type *fromType* *to* type *toType* and place the result *to* output value to. Returns true if conversion succeed; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_0abf1625:

 void **MetaType::create** (void * *copy* = nullptr) const

Returns a *copy* of *copy* value, with type, which represented by current MetaType object. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_b4c0a325:

 void **MetaType::create** (uint32_t  *type*, void * *copy* = nullptr)

Returns a *copy* of *copy* value, with type. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_f104edb9:

 void **MetaType::destroy** (void * *data*) const

Destroys the value with type, which represented by current MetaType object, located at data. This function calls delete operator.

----

.. _api_MetaType_7e65a120:

 void **MetaType::destroy** (uint32_t  *type*, void * *data*)

Destroys the value with type, located at data. This function calls delete operator.

----

.. _api_MetaType_1423e6c8:

 void **MetaType::destruct** (void * *data*) const

Destructs the value with type, which represented by current MetaType object, located at data. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_dc36b824:

 void **MetaType::destruct** (uint32_t  *type*, void * *data*)

Destructs the value with type, located at data. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_e0f564a3:

 int **MetaType::flags** () const

Returns flags for the type.

----

.. _api_MetaType_17520638:

 bool **MetaType::hasConverter** (uint32_t  *from*, uint32_t  *to*)

Returns true in case of type *from* can be converted *to* type to; otherwise returns false.

----

.. _api_MetaType_f80de32b:

 bool **MetaType::isValid** () const

Returns true in case of this MetaType object contain valid information; otherwise returns false.

----

.. _api_MetaType_f45ceda0:

const char **MetaType::name** () const

Returns the name of type.

----

.. _api_MetaType_a682739b:

const char **MetaType::name** (uint32_t  *type*)

Returns a name of *type* with *type* ID. Returns nullptr for unregistered type.

----

.. _api_MetaType_83c9b216:

 bool **MetaType::registerConverter** (uint32_t  *from*, uint32_t  *to*, :ref:`MetaType::converterCallback<api_MetaType_converterCallback>`  *function*)

Registers the possibility *to* convert value type *from* *to* type *to* with conversion function. Returns true in case of converter successfully registered; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_c5ef8029:

 uint32_t **MetaType::registerType** (:ref:`MetaType::Table<api_MetaType_Table>` & *table*)

Registers type by type MetaType::Table table. Use registerMetaType() instead this function. Returns an ID of registered type.

----

.. _api_MetaType_bf642de5:

 int **MetaType::size** () const

Returns the size of type.

----

.. _api_MetaType_dea72463:

 int **MetaType::size** (uint32_t  *type*)

Returns a size of *type* with *type* ID. Returns 0 for unregistered type.

----

.. _api_MetaType_be4a69c0:

 :ref:`MetaType::Table<api_MetaType::Table>` * **MetaType::table** (uint32_t  *type*)

Returns *type* information table if *type* registered; otherwise returns nullptr.

----

.. _api_MetaType_c579d831:

 uint32_t **MetaType::type** (char * *name*)

Returns an ID of type with type name. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_4a75db13:

 uint32_t **MetaType::type** (:ref:`type_info<api_type_info>` & *type*)

Returns an ID of *type* with *type* info. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_b5934d02:

 :ref:`MetaType::TypeMap<api_MetaType::TypeMap>`  **MetaType::types** ()

Returns a table of registered types.

----

.. _api_MetaType_7eadf013:

 void **MetaType::unregisterType** (:ref:`MetaType::Table<api_MetaType_Table>` & *table*)

Unregisters type by type MetaType::Table table. Use unregisterMetaType() instead this function.


