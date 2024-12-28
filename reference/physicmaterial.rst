.. _api_PhysicMaterial:

PhysicMaterial
==============

Inherited: None

.. _api_PhysicMaterial_description:

Description
-----------

The PhysicMaterial class provides a convenient way to manage physical properties such as friction, restitution, and density for materials used in physics simulations. It can be associated with colliders or rigid bodies to control their behavior during interactions with other physical entities.



.. _api_PhysicMaterial_public:

Public Methods
--------------

+--------+-------------------------------------------------------------------------------+
|  float | :ref:`density<api_PhysicMaterial_density>` () const                           |
+--------+-------------------------------------------------------------------------------+
|  float | :ref:`friction<api_PhysicMaterial_friction>` () const                         |
+--------+-------------------------------------------------------------------------------+
|  float | :ref:`restitution<api_PhysicMaterial_restitution>` () const                   |
+--------+-------------------------------------------------------------------------------+
|   void | :ref:`setDensity<api_PhysicMaterial_setDensity>` (float  density)             |
+--------+-------------------------------------------------------------------------------+
|   void | :ref:`setFriction<api_PhysicMaterial_setFriction>` (float  friction)          |
+--------+-------------------------------------------------------------------------------+
|   void | :ref:`setRestitution<api_PhysicMaterial_setRestitution>` (float  restitution) |
+--------+-------------------------------------------------------------------------------+



.. _api_PhysicMaterial_static:

Static Methods
--------------

None

.. _api_PhysicMaterial_methods:

Methods Description
-------------------

.. _api_PhysicMaterial_density:

 float **PhysicMaterial::density** () const

Sets the density of the material.

**See also** setDensity().

----

.. _api_PhysicMaterial_friction:

 float **PhysicMaterial::friction** () const

Returns the coefficient of friction for the material.

**See also** setFriction().

----

.. _api_PhysicMaterial_restitution:

 float **PhysicMaterial::restitution** () const

Returns the coefficient of restitution (bounciness) for the material.

**See also** setRestitution().

----

.. _api_PhysicMaterial_setDensity:

 void **PhysicMaterial::setDensity** (float  *density*)

The new *density* of the material.

**See also** *density*().

----

.. _api_PhysicMaterial_setFriction:

 void **PhysicMaterial::setFriction** (float  *friction*)

Sets the coefficient of *friction* for the material.

**See also** *friction*().

----

.. _api_PhysicMaterial_setRestitution:

 void **PhysicMaterial::setRestitution** (float  *restitution*)

Sets the coefficient of *restitution* (bounciness) for the material.

**See also** *restitution*().


