.. _api_MaterialInstance:

MaterialInstance Class
======================

Inherited: None

.. _api_MaterialInstance_description:

Description
-----------

The MaterialInstance class enables customization of material parameters and textures for rendering objects. It supports various types of parameters, and the customization can be done per-instance.



.. _api_MaterialInstance_public:

Public Methods
--------------

+----------------------------------+----------------------------------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_MaterialInstance_material>` () const                                            |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                              int | :ref:`paramCount<api_MaterialInstance_paramCount>` () const                                        |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                      std::string | :ref:`paramName<api_MaterialInstance_paramName>` (int  index) const                                |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|      :ref:`Variant<api_Variant>` | :ref:`paramValue<api_MaterialInstance_paramValue>` (int  index) const                              |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                             void | :ref:`setBufferValue<api_MaterialInstance_setBufferValue>` (const char * name, const void * value) |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                             void | :ref:`setSurfaceType<api_MaterialInstance_setSurfaceType>` (int  type)                             |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTexture<api_MaterialInstance_setTexture>` (const char * name, Texture * texture)          |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                              int | :ref:`surfaceType<api_MaterialInstance_surfaceType>` () const                                      |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|    :ref:`Texture<api_Texture>` * | :ref:`texture<api_MaterialInstance_texture>` (const char * name)                                   |
+----------------------------------+----------------------------------------------------------------------------------------------------+



.. _api_MaterialInstance_static:

Static Methods
--------------

None

.. _api_MaterialInstance_methods:

Methods Description
-------------------

.. _api_MaterialInstance_material:

 :ref:`Material<api_Material>`* **MaterialInstance::material** () const

Getter for the base material associated with the instance.

----

.. _api_MaterialInstance_paramCount:

 int **MaterialInstance::paramCount** () const

Gets the total count of parameters in the material.

----

.. _api_MaterialInstance_paramName:

 std::string **MaterialInstance::paramName** (int  *index*) const

Gets the name of a parameter by *index*.

----

.. _api_MaterialInstance_paramValue:

 :ref:`Variant<api_Variant>` **MaterialInstance::paramValue** (int  *index*) const

Gets the overridden or default value of a parameter by *index*.

----

.. _api_MaterialInstance_setBufferValue:

 void **MaterialInstance::setBufferValue** (char * *name*, void * *value*)

Sets the *value* of a parameter with specified *name* in the uniform buffer.

----

.. _api_MaterialInstance_setSurfaceType:

 void **MaterialInstance::setSurfaceType** (int  *type*)

Sets the surface *type* associated with the material instance.

**See also** surfaceType().

----

.. _api_MaterialInstance_setTexture:

 void **MaterialInstance::setTexture** (char * *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* parameter with specified *name*.

**See also** *texture*().

----

.. _api_MaterialInstance_surfaceType:

 int **MaterialInstance::surfaceType** () const

Gets the surface type associated with the material instance.

**See also** setSurfaceType().

----

.. _api_MaterialInstance_texture:

 :ref:`Texture<api_Texture>`* **MaterialInstance::texture** (char * *name*)

Getter for the overridden texture associated with a specific parameter *name*.

**See also** setTexture().


