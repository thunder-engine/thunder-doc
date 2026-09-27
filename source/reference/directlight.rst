.. _api_DirectLight:

DirectLight
===========

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_DirectLight_description:

Description
-----------

To determine the emit direction DirectLight uses Transform component of the own Actor.



.. _api_DirectLight_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------+
|  :ref:`Camera<api_Camera>` * | :ref:`camera<api_DirectLight_617b9035>` () const             |
+------------------------------+--------------------------------------------------------------+
|                         void | :ref:`setCamera<api_DirectLight_3f6e270a>` (Camera * camera) |
+------------------------------+--------------------------------------------------------------+



.. _api_DirectLight_static:

Static Methods
--------------

None

.. _api_DirectLight_methods:

Methods Description
-------------------

.. _api_DirectLight_617b9035:

 :ref:`Camera<api_Camera>` * **DirectLight::camera** () const

Sets a camera associated with current light source. This camera will be used to calculate light location because this type light of source is always following the viewer.

**See also** setCamera().

----

.. _api_DirectLight_3f6e270a:

 void **DirectLight::setCamera** (:ref:`Camera<api_Camera>` * *camera*)

Sets a *camera* associated with current light source.

**See also** camera().


